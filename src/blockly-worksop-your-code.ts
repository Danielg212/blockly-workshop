import * as Blockly from 'blockly'

const loadObBlocks = () => {
  const Blocks : any = Blockly['Blocks'] as any
  const JavaScript : any = (Blockly as any)['JavaScript'] as any


  ///// helloWorld start ///////////
  Blocks['helloWorld'] = {
    init: function() {
      this.appendDummyInput()
        .appendField("hello world")

      this.appendDummyInput()
        .appendField('your name:')
        .appendField(new Blockly.FieldTextInput(''), 'yourName')

      this.setNextStatement(true, 'LogoBlock')
      this.setPreviousStatement(true, 'LogoBlock')
      this.setColour('#EE6513')
    },
  }

  JavaScript['helloWorld'] = (block: any)=> {
    let yourName = block.getFieldValue('yourName')
    return `console.log('hello world ${yourName}');\nalert('hello world ${yourName}')\n`
  }
  ///// helloWorld end ///////////


  ///// your code start here ///////////
  //
  Blocks['rotate'] = {
    init: function() {
      this.appendDummyInput()
      .appendField("rotate")

      this.appendDummyInput()
      .appendField('rotate deg')
      .appendField(new Blockly.FieldTextInput(''), 'deg')

      this.setNextStatement(true, 'LogoBlock')
      this.setPreviousStatement(true, 'LogoBlock')
      this.setColour('#2082ff')

    }
}

JavaScript['rotate'] = (block: any)=> {
 let deg =  block.getFieldValue('deg');
  
  return `api.logo.rt(${deg});\n`
}

Blocks['forward'] = {
  init: function() {
    this.appendDummyInput()
    .appendField("forward")

    this.appendDummyInput()
    .appendField('forward')
    .appendField(new Blockly.FieldTextInput(''), 'forward')

    this.setNextStatement(true, 'LogoBlock')
    this.setPreviousStatement(true, 'LogoBlock')
    this.setColour('#ff2048')

  }
}

JavaScript['forward'] = (block: any)=> {
let deg =  block.getFieldValue('forward');

return `api.logo.fd(${deg});\n`
}

Blocks['repeat'] = {
  init: function() {
    this.appendDummyInput()
    .appendField("repeat")

    this.appendStatementInput("command").setCheck('LogoBlock')

    this.appendDummyInput()
    .appendField('loops')
    .appendField(new Blockly.FieldTextInput(''), 'loops')


    this.setNextStatement(true, 'LogoBlock')
    this.setPreviousStatement(true, 'LogoBlock')
    this.setColour('#5820ff')

  }
}

JavaScript['repeat'] = (block: any)=> {
  let loops = block.getFieldValue('loops')
  let command = JavaScript.statementToCode(block, 'command')

  return `for(let i=0;i<=${loops};i++){
      ${command}
  }`;
  }
  //
  ///// your code end here ///////////

}

///////////////// boilerplate //////////
export const blocklyWorksopYourCode = {
  load: loadObBlocks,
  getBlocklyInstance: () => Blockly,
} as TurtleBlockly

export interface TurtleBlockly {
  load: () => void
  getBlocklyInstance: () => any
}


