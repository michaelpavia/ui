import marked from "marked";
import PropTypes from "prop-types";
import React from "react";

import textToHash from "src/utils/textToHash";

import Link from "@riipen-ui/components/Link";

const renderer = new marked.Renderer();

function setRenderer(itemsCollector) {
  renderer.heading = (value, level) => {
    const text = value.replace(/<\/?[^>]+(>|$)/g, ""); // remove HTML

    if (level === 2) {
      itemsCollector.current.push({
        text,
        level,
        hash: textToHash(text),
        children: []
      });
    } else if (level === 3) {
      if (!itemsCollector.current[itemsCollector.current.length - 1]) {
        throw new Error(`Missing parent level for: ${text}`);
      }

      itemsCollector.current[itemsCollector.current.length - 1].children.push({
        text,
        level,
        hash: textToHash(text)
      });
    }
  };
}

function getItems(sections, itemsCollector) {
  marked(sections.join(""), { renderer });

  return itemsCollector.current;
}

export default function TOC(props) {
  const { sections } = props;

  const itemsCollector = { current: [] };

  setRenderer(itemsCollector);

  const items = getItems(sections, itemsCollector);

  const itemLink = item => (
    <Link display="block" href={`#${item.hash}`} underline="none">
      {item.text}
    </Link>
  );

  return (
    <nav>
      {items.length > 0 ? (
        <React.Fragment>
          <p>Content</p>
          <ul>
            {items.map(item => (
              <li key={item.text}>
                {itemLink(item)}
                {item.children.length > 0 ? (
                  <ul>
                    {item.children.map(child => (
                      <li key={child.text}>{itemLink(child, true)}</li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </React.Fragment>
      ) : null}
      <style jsx>{`
        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
        }
        ul ul {
          list-style-type: none;
          margin: 0;
          padding: 0 0 0 10px;
        }
      `}</style>
    </nav>
  );
}

TOC.propTypes = {
  sections: PropTypes.array.isRequired
};