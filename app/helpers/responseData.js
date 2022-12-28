const responseData = (status, message, error, data) => {
  if (error !== null && error instanceof Error) {
    const response = {
      status: status,
      message: error.message,
      error: error,
      data: null,
    };

    return response;
  }

  const response = {
    status,
    message,
    error: error,
    data: data,
  };

  return response;
};

module.exports = responseData;
