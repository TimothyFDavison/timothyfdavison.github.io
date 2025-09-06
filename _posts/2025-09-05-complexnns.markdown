---
layout: page
icon: "/assets/cvnn-1.png"
title: "Complex-Valued Neural Networks"
---

# Complex-Valued Neural Networks
This post is a work in progress as I experiment with complex-valued neural networks.

Code is under development [here](https://github.com/TimothyFDavison/Complex-Micrograd).

## Background
Many optimization problems involving complex-valued parameters (e.g. 
in signal processing) treat the real and imaginary components of complex numbers as separate real-valued channels. 

The reason for this separation is that complex differentiability - also known as holomorphicity - imposes rich 
but much stricter conditions on a function. Most functions used in neural networks do not satisfy these stricter 
conditions. In fact, Liouville’s theorem states that any bounded, entire (i.e., holomorphic everywhere on ℂ) function 
is constant which renders
such functions unusable for frameworks like gradient descent. 

For an intuition about this challenge, consider that in real-valued optimization, the gradient points in a s
ingle direction in the real domain. 
In contrast, the complex plane allows infinitely many directions of variation due to the extra degree of freedom
introduced by the complex phase.

This separation, however, can lose important structure and information in the signal. 
To address this issue, Wirtinger calculus was
introduced.

Wirtinger calculus defines partial derivatives with respect to both a complex variable and its conjugate. 
This allows gradient-based optimization to extend to non-holomorphic functions, providing a foundation for 
building complex-valued neural networks — including transformers.

## Experimentation
See `CVNN.ipynb` on my [Github page](https://github.com/TimothyFDavison/Complex-Micrograd)
for what I'm working on so far. Beginning with a `ComplexValue` class to represent complex values, I start with a 
ComplexValue class to represent complex numbers and aim to build a personal library for complex-valued modeling, 
using Karpathy’s Micrograd as inspiration.

Some resources I'm drawing from,
- [The Complex Gradient Operator
and the CR-Calculus (Kreutz-Delgado, 2009)](https://arxiv.org/pdf/0906.4835)
- [A short tutorial on Wirtinger Calculus with applications in
quantum information (Koor, 2023)](https://arxiv.org/pdf/2312.04858)
- [nput Convex Neural Networks (Amos, 2017)](https://arxiv.org/pdf/1609.07152)
- [Deep Complex Networks (Trabelsi, 2018)](https://arxiv.org/pdf/1705.09792)
- [A Survey of Complex-Valued Neural Networks (Bassey, 2021)](https://arxiv.org/pdf/2101.12249)
- [Theory and Implementation of Complex-Valued Neural Networks (Barrachina, 2023)](https://arxiv.org/pdf/2302.08286)
- Github repositories (none actively maintained):
  - https://github.com/NEGU93/cvnn/
  - https://github.com/ChihebTrabelsi/deep_complex_networks
  - https://github.com/wavefrontshaping/complexPyTorch
- Blogs:
  - https://medium.com/geekculture/improve-neural-networks-by-using-complex-numbers-5e142b8931e6 
