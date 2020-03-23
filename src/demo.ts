import {blocklyWorksopYourCode, TurtleBlockly} from './blockly-worksop-your-code.ts';
import {turtleLogo} from './logo/turtleLogo.ts';

import './css/reset.css';
import './css/main.css';

turtleLogo.init();

let workspace: any
const Blockly: any = blocklyWorksopYourCode.getBlocklyInstance()

const { Blocks, JavaScript } = Blockly as any

// @ts-ignore
export const init = () => {
  blocklyWorksopYourCode.load()
  const blocklyEl = document.getElementById('blockly-container')
  workspace = Blockly.inject(blocklyEl, {
    renderer: 'zelos',
    disable: false,
    grid: {
      spacing: 25,
      length: 3,
      colour: '#ccc',
      snap: true,
      trashcan: true,
    },
    move: {
      drag: true,
      wheel: false,
    },
    zoom: {
      startScale: 1.0,
      maxScale: 3,
      minScale: 0.3,
      scaleSpeed: 1.2,
    },
    toolbox: `
<xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
    <block type="helloWorld"/>
    <block type="rotate"/>
    <block type="forward"/>
    <block type="repeat"/>

</xml>
        `,
  })
  workspace.addChangeListener(showCode)
}

function blocksToCode() {
  JavaScript.addReservedWords('code')
  const code = JavaScript.workspaceToCode(workspace)
  return code;
}

function showCode() {
  const code = blocksToCode()
  document.getElementById('js-textarea').innerHTML = `// Generated JS:\n${code}`
}

document.addEventListener('DOMContentLoaded', function() {
  init()
})

document.querySelector('#btn-run').addEventListener('click', () => {
    new Function(blocksToCode())()
})
