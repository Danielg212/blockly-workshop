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


