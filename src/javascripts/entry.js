import './pugImport';
import '../css/base.scss';

if (module.hot) {
  module.hot.accept(console.error);
  module.hot.dispose(() => {
    window.location.reload();
  });
}
