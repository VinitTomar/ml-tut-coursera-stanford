function [J, grad] = costFunctionReg(theta, X, y, lambda)
%COSTFUNCTIONREG Compute cost and gradient for logistic regression with regularization
%   J = COSTFUNCTIONREG(theta, X, y, lambda) computes the cost of using
%   theta as the parameter for regularized logistic regression and the
%   gradient of the cost w.r.t. to the parameters. 

% Initialize some useful values
m = length(y); % number of training examples

% You need to return the following variables correctly 
J = 0;
grad = zeros(size(theta));

% ====================== YOUR CODE HERE ======================
% Instructions: Compute the cost of a particular choice of theta.
%               You should set J to the cost.
%               Compute the partial derivatives and set grad to the partial
%               derivatives of the cost w.r.t. each parameter in theta

%using theta1 because we do not regularize theta(1), therefore we need to 
theta1 = [0 ; theta(2:length(theta), :)];

[J, grad] = costFunction(theta, X, y);

p = (sum(theta1 .^ 2) * (lambda/(2*m)));
J = J .+ p;

grad = grad .+ ((lambda/m) * theta1);



% =============================================================

end