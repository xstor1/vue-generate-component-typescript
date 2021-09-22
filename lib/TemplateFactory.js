import ComponentTpl from './templates/ComponentTpl';
import SingleTpl from './templates/SingleTpl';
import TemplateGenerator from './TemplateGenerator';

/**
 * TemplateFactory
 */
class TemplateFactory {

  /**
   * Factory to generate the templates
   * @param cli options
   */
  static createTemplateFor( cli ) {

    /**
     * Generate Vue 3 component
     */
    if( cli.component ) {
   
      return new TemplateGenerator(new ComponentTpl(cli.component));
    }

    /**
     * Generate Vue 3 single file component
     */
    if( cli.single ) {
      return new TemplateGenerator(new SingleTpl(cli.single, cli.folder));
    }


  }

}

export default TemplateFactory
