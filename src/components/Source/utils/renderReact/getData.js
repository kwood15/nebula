const isString = x => typeof x === 'string'
const isNumber = x => typeof x === 'number'
const isTextNode = x => isString(x) || isNumber(x)

const defaultData = {
  name: null,
  text: null,
  children: null,
}

const extractTextNode = text =>
  isString(text)
    ? ({
      ...defaultData,
      text
    }) : ({
      ...defaultData,
      text: text.toString()
    })

const extractReactNode = ({ type, props: { children } }) =>
  isString(type)
    ? {
        ...defaultData,
        name: type,
        children,
      }
    : {
      ...defaultData,
      name: (type.name || type.displayName || 'Unknown'),
      children,
    }

const extractNode = node =>
  isTextNode(node) ? extractTextNode(node) : extractReactNode(node)

const getData = node =>
  node ? extractNode(node) : defaultData

export default getData
