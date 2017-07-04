import Heading from 'SgTags/SgHeading/SgHeading';
import Rhythm from 'SgTags/SgRhythm/SgRhythm';
import { themes } from 'Source/fc-config';


const SgFileIndex__ItemThemed = (props) => {
  const { url, content } = props.item;

  return (
    <li>
      <a className="SgFileIndex__name" href={`${url}?theme=${themes[0].id}`}>{content}</a>
      { themes.length > 1 &&
        <span className="SgFileIndex__links">
          &nbsp;
          ({ themes
              .map((t) => (
                <a href={`${url}?theme=${t.id}`}>{t.name}</a>
              ))
          })
        </span>
      }
    </li>
  );
};

SgFileIndex__ItemThemed.propTypes = {
  item: PropTypes.object
};


const SgFileIndex__Item = (props) => {
  const { url, content } = props.item;

  return (
    <li>
      <a className="SgFileIndex__name" href={`${url}`}>{content}</a>
    </li>
  );
};

SgFileIndex__Item.propTypes = {
  item: PropTypes.object
};


export const SgFileIndex = (props) => {
  const {
    themeLinks,
    items,
    className,
    headingSize,
    size,
    title,
    RhythmComponent,
    HeadingComponent,
    ...attrs
  } = props;

  return (
    <RhythmComponent size={size} className="SgFileIndex">
      { title &&
        <HeadingComponent level={headingSize}>
          { title }
          &nbsp;
          { items.length > 0 &&
            <small className="SgFileIndex__count">{items.length}</small>
          }
        </HeadingComponent>
      }
      { items.length > 0
        ? (
          <ul className={className} {...attrs}>
            { items.map((item) => (
              item.theme === undefined && item.theme !== null
                ? <SgFileIndex__ItemThemed key={item.url} item={item} />
                : <SgFileIndex__Item key={item.url} item={item} />
            )) }
          </ul>
        )
        : <p>&mdash;</p>
      }
    </RhythmComponent>
  );
};

SgFileIndex.defaultProps = {
  themeLinks: false,
  items: [],
  className: '',
  headingSize: 'h2',
  size: 'default',
  RhythmComponent: Rhythm,
  HeadingComponent: Heading
};

SgFileIndex.propTypes = {
  themeLinks: PropTypes.bool,
  items: PropTypes.array,
  className: PropTypes.string,
  headingSize: PropTypes.string,
  size: PropTypes.string,
  title: PropTypes.string,
  RhythmComponent: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node
  ]),
  HeadingComponent: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node
  ])
};


export default SgFileIndex;
