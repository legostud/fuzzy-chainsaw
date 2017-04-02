import startCase from 'lodash.startcase';
import Heading from 'SgTags/Heading/Heading';
import Rhythm from 'SgTags/Rhythm/Rhythm';

const pagesContext = require.context('Pages/', true, /^(?!.*\.test|.*\.example).*\.jsx$/);
const tagsContext = require.context('Tags/', true, /^(?!.*\.test|.*\.example).*\.jsx$/);
const componentsContext = require.context('Components/', true, /^(?!.*\.test|.*\.example).*\.jsx$/);


const isRenderableModule = (key) => (
  key.indexOf('.jsx') !== -1 && // grab jsx files
  key.indexOf('.test.jsx') === -1 && // skip test files
  key.substr(0, 1) !== '_' // skip partial files
);

// builds a path:module object
// { './source/page.jsx': require('./source/page.jsx') }
const requireAllpages = () =>
  pagesContext.keys()
    .filter(isRenderableModule)
    .reduce((modules, key) => {
      const newKey = key.replace(/\.jsx$/, '.html');
      modules[newKey] = pagesContext(key).default;
      return modules;
    }, { });

const requireAllComponents = (context, prefix) =>
  context.keys()
    .filter(isRenderableModule)
    .reduce((modules, key) => {
      const name = key.substr(2).split('/')[0];
      modules[prefix + name] = context(key).default;
      return modules;
    }, {});

const path2LinkList = (baseUrl = '') => (path) => {
  const normalPath = path.substr(0, path.lastIndexOf('.') !== -1 ? path.lastIndexOf('.') : undefined);
  return {
    url: `${baseUrl}/${normalPath}.html`, // remove html on dev
    content: path.replace('.html', '').split('/').map(startCase).join(' / ')
  };
};


export const pagesIndexData =
  Object.keys(requireAllpages(pagesContext))
    .map((p) => p.substr(2))
    .sort((a, b) => a.split('/').length - b.split('/').length)
    .map(path2LinkList());


export const componentsIndexData =
  Object.keys(requireAllComponents(componentsContext, '/styleguide/components/'))
    .filter((p) => p.indexOf('/components/') !== -1)
    .map((p) => p.substr(p.indexOf('/components/') + '/components/'.length))
    .map(path2LinkList('/styleguide/components'));


export const tagsIndexData =
  Object.keys(requireAllComponents(tagsContext, '/styleguide/tags/'))
    .map((p) => p.substr(p.indexOf('/tags/') + '/tags/'.length))
    .map(path2LinkList('/styleguide/tags'));


export const FileIndex = (props) => {
  const {
    items,
    className,
    size,
    title,
    RhythmComponent,
    HeadingComponent,
    ...attrs
  } = props;

  return (
    items.length
    ? (
      <RhythmComponent size={size}>
        <HeadingComponent level="2">{title}</HeadingComponent>
        <ul className={className} {...attrs}>
          { items.map((item) => (
            <li key={item.url}>
              <a href={item.url}>{item.content}</a>
            </li>
          )) }
        </ul>
      </RhythmComponent>
    )
    : null
  );
};

FileIndex.propTypes = {
  items: React.PropTypes.array,
  className: React.PropTypes.string,
  size: React.PropTypes.string,
  title: React.PropTypes.string,
  RhythmComponent: React.PropTypes.oneOfType([React.PropTypes.func, React.PropTypes.element]),
  HeadingComponent: React.PropTypes.oneOfType([React.PropTypes.func, React.PropTypes.element])
};

FileIndex.defaultProps = {
  items: [],
  className: '',
  size: 'default',
  title: '',
  RhythmComponent: Rhythm,
  HeadingComponent: Heading
};


export default FileIndex;
