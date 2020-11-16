/**
 * Format error responses
 * @param  {Object} schemaErrors - array of json-schema errors, describing each validation failure
 * @return {{success: boolean, errors: *}} formatted api response
 */
export const ErrorResponse = (schemaErrors) => {
  const errors = schemaErrors.map( error => {
    return {
      path: error.dataPath,
      message: error.message
    };
  });
  return {
    success: false,
    errors: errors
  };
}

export const SuccessResponse = {
  success: true,
  message: "Proceso realizado con exito",
  data: null,
};
