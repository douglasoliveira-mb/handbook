---
title: Codeblocks
sidebar_position: 11
---

```jsx title="Codeblock" showLineNumbers
function Greeting(props) {
    return <p>Welcome, {props.userName}!</p>;
}

export default Greeting;
```

```jsx title="Highlight Lines" showLineNumbers
function HighlightText(highlit) {
    if (highlight) {
        // highlight-next-line
        return 'This text is highlighted!';
    }
    return 'Nothing highlighted';
}

function HighlightMoreText(highlight) {
    // highlight-start
    if (highlight) {
        return 'This range is highlighted!';
    }
    // highlight-end
    return 'Nothing highlighted';  
}
```