---
title: 'border-box vs content-box'
date: '2023-01-23'
image: 'box-sizing-difference.jpg'
excerpt: "Box Sizing in CSS: Understanding the Differences Between 'content-box' and 'border-box' for Effective Layouts"
isFeatured: true
tags: 'CSS'
author: 'Marcel Miłosz'
readTime: '3 min.'
postId: 4
---

Box sizing is a **critical concept** in CSS layout that determines how the dimensions of an element are calculated. The box-sizing property controls the sizing and rendering of an element's content and padding box. There are two values for this property: content-box and border-box. In this article, we'll explore the differences between these two values and how they affect CSS layout.

![difference between border and content box](/images/posts/box-sizing-difference/difference.png)

## content-box
The content-box value is the default value for the box-sizing property. When box-sizing: content-box is applied to an element, the dimensions of the element are calculated based on the size of its content box. This means that the element's width and height properties only apply to the content box, and **the padding and border are added on top of the specified width and height.**

For example, suppose we have a div element with a width of 200 pixels, a height of 100 pixels, and a padding of 10 pixels:

```css
div {
  width: 200px;
  height: 100px;
  padding: 10px;
  box-sizing: content-box;
}
```

In this case, the total width of the element will be 220 pixels (200 pixels for the content box and 10 pixels of padding on each side), and the total height of the element will be 120 pixels (100 pixels for the content box and 10 pixels of padding on the top and bottom).

## border-box
The border-box value for the box-sizing property causes the dimensions of an element to be calculated based on the size of its border box. In other words, **the width and height properties apply to the entire box, including the padding and border.**

For example, suppose we have a div element with a width of 200 pixels, a height of 100 pixels, and a padding of 10 pixels:

```css
div {
  width: 200px;
  height: 100px;
  padding: 10px;
  box-sizing: border-box;
}
```

In this case, the total width of the element will be 200 pixels, and the total height will be 100 pixels. The padding and border are included in the specified width and height, so they don't add any additional space.

## When to Use Which Value
Both content-box and border-box have their use cases. For example, **content-box is useful when you want to specify the exact size of an element's content and control the padding and border separately.** On the other hand, **border-box is useful when you want to specify the overall size of the element, including the padding and border**.

In general, it's a good idea to use border-box for most layout purposes since it makes it easier to control the overall size of an element. It also makes it easier to create elements with fixed dimensions that adapt to changes in padding or border. However, there may be cases where content-box is more appropriate, such as when you want to control the size of an element's content more precisely.

## Conclusion
In this article, we've explored the differences between content-box and border-box for the box-sizing property in CSS. Understanding the differences between these values is critical for creating effective CSS layouts. By using the right box-sizing value for your layout needs, you can create beautiful and responsive websites that work across a variety of devices and screen sizes.