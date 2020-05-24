import {moduleMetadata, storiesOf} from '@storybook/angular';
import {NeuomorphicModule} from '../app/neuomorphic/neuomorphic.module';

storiesOf('Neumorphic card component', module)
  .addDecorator(moduleMetadata({
    imports: [NeuomorphicModule]
  }))
  .add('Default', () => {
    return {
      template: `<ryco-neuomorph-card></ryco-neuomorph-card>`
    };
  });

