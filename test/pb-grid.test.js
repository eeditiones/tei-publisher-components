 
import { expect } from '@open-wc/testing';
import { waitForPage, cleanup } from './util.js';

import '../src/pb-page.js';
import '../src/pb-grid.js';
import '../src/pb-panel.js';

describe('pb-grid', () => {
  afterEach(cleanup);

  it('Can open a panel', async () => {
    const el = await waitForPage(`
            <pb-page endpoint="." api-version="1.0.0">
                <!-- Define the grid with no initial columns, but three possible -->
                <pb-grid id="grid" panels="[]" >
                    <template>
                        <pb-panel>
                            <template title="FIRST">I am a panel</template>
                            <template title="SECOND">I am also a panel</template>
                            <template title="THIRD">I am also a panel! The last</template>
                        </pb-panel>
                    </template>
                </pb-grid>
            </pb-page>`);

    /**
     * @type {import('../src/pb-grid.js').PbGrid}
     */
    const grid = el.querySelector('#grid');

    grid.addPanel(1);
    expect(grid.panels).to.have.members([1], 'The second panel should be open now');

    grid.removePanel(1);
    expect(grid.panels).to.have.members([], 'All panels should be closed now');

    grid.addPanel(0);
    expect(grid.panels).to.have.members([0], 'The first panel should be opened now');

    // Call without parameters: open the 'next' panel
    grid.addPanel();
    expect(grid.panels).to.have.members([0, 1], 'The first two panels should be opened now');

    grid.removePanel(0);
    grid.removePanel(1);

    // Call without parameters: open the 'next' panel: skip the first
    grid.addPanel(1);
    grid.addPanel();
    expect(grid.panels).to.have.members([1, 2], 'The first two panels should be opened now');
  });
});
