// @ts-check
import { test, expect } from '@playwright/test';

test.describe('Amazon product search validation', () => {
  test('Launch Amazon India, search watch, and list top 5 highest priced products', async ({ page }) => {
    await page.goto('https://www.amazon.in/');
    await expect(page).toHaveTitle(/Amazon/i);

    const searchInput = page.locator('#twotabsearchtextbox');
    await expect(searchInput).toBeVisible();
    await searchInput.fill('watch');
    await page.locator('#nav-search-submit-button').click();

    await expect(page).toHaveURL(/k=watch/);
    await page.waitForLoadState('networkidle');

    const results = page.locator('[data-component-type="s-search-result"]');
    await expect(results.first()).toBeVisible();

    const products = await results.evaluateAll(nodes =>
      nodes
        .map(node => {
          const titleElement = node.querySelector('h2 a span');
          const wholePrice = node.querySelector('.a-price-whole')?.textContent || '';
          const fractionPrice = node.querySelector('.a-price-fraction')?.textContent || '00';
          const priceText = `${wholePrice}`.replace(/[\D]/g, '');
          const priceValue = priceText ? parseFloat(`${priceText}.${fractionPrice.replace(/\D/g, '')}`) : null;
          return {
            title: titleElement?.textContent?.trim() || 'Unknown product',
            price: Number.isFinite(priceValue) ? priceValue : null,
          };
        })
        .filter(item => item.price !== null)
    );

    expect(products.length).toBeGreaterThanOrEqual(5);

    const top5 = products
      .sort((a, b) => b.price - a.price)
      .slice(0, 5);

    expect(top5.length).toBe(5);

    console.log('Top 5 highest price watch products from Amazon.in:');
    top5.forEach((product, index) => {
      console.log(`${index + 1}. ${product.title} - ₹${product.price.toFixed(2)}`);
      expect(product.price).toBeGreaterThan(0);
    });
  });
});
