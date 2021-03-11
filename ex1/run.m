function run()

data = load('ex1data2.txt');
X = data(:, 1:2);
y = data(:, 3);
m = length(y);

[X, mu, sigma] = featureNormalize(X);

X = [ones(m, 1) X];
theta = zeros(3, 1);

% y
computeCost(X, y, theta)

alpha = 0.1;

num_iters = 400;

[theta, j] = gradientDescent(X, y, theta, alpha, num_iters);
% j
theta

% data = load('ex1data1.txt'); % read comma separated data
% X = data(:, 1); 
% y = data(:, 2);

% m = length(X); % number of training examples
% X = [ones(m,1),data(:,1)]; % Add a column of ones to x
% theta = zeros(2, 1); % initialize fitting parameters
% iterations = 400;
% alpha = 0.1;

% theta = gradientDescent(X, y, theta, alpha, iterations);

% theta

end