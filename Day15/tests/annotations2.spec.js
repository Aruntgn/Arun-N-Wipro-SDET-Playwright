import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_7hz2t19t5c_e&adgrpid=155259815513&hvpone=&hvptwo=&hvadid=808942225170&hvpos=&hvnetw=g&hvrand=14657213118306201769&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9061926&hvtargid=kwd-10573980&hydadcr=14453_2459472&gad_source=1');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('Gamin');
  await page.goto('https://www.amazon.in/s?k=gaming+controller&crid=1MYJ3H6LCH7VN&sprefix=Gamin%2Caps%2C337&ref=nb_sb_ss_mvt-t11-ranker_2_5');
  await page.getByRole('link', { name: 'Apply the filter Free' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Sponsored Ad - PowerA Battle' }).click();
  const page1 = await page1Promise;
  await page1.goto('https://www.amazon.in/PowerA-DragonTM-Advanced-Wireless-Controller/dp/B0D9VN2K8B/ref=sr_1_2_sspa?crid=1MYJ3H6LCH7VN&dib=eyJ2IjoiMSJ9.H5tzHfHjA5NbxbyK-cBLdXb-OqXguyYczmezaWM8lTD2AiOMa2gpum1p4pypDt4eSQWafODJtuookaevf_cCFlwD7UxlM68g0baPuJnAJI7qWF0_n5sZTsDIQwoZ1ZUkusYHlJaSS0Kx5PEKmL5b7LZKSA-iG6HKrVRXMIhBXFAYy2seWZwmzMm8vFH1LFaUXRS5zwgDgQdndgZR5vxanoVIkLm4XoYG_ReTeVZNLuw.4zWYXTv3b4D8rGrj_1GGNb1uePPAQ76REW_WwCKClEw&dib_tag=se&keywords=gaming%2Bcontroller&qid=1779082739&refinements=p_n_free_shipping_eligible%3A205563695031&rnid=205563694031&sprefix=Gamin%2Caps%2C337&sr=8-2-spons&aref=9TjQJMQWQ5&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1');
  await page1.getByRole('button', { name: 'Add to cart', exact: true }).click();
  await page1.getByRole('button', { name: 'No thanks' }).click();
  await page1.getByRole('button', { name: 'Proceed to Buy (1 item) Buy' }).click();
});
