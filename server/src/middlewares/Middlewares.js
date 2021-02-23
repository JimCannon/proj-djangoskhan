const notFound = (req, res, next) => {
	const error = new Error(`Not found: ${req.orignalUrl}`)
	res.status(404)
	next(error)
}

const errorHandler = (error, req, res, next) => {
	const statuscode = res.statusCode === 200 ? 500 : res.statuCode
	res.status(statuscode)
	res.json({
		statuscode: statuscode,
		message: error.message,
		stacktrace: error.stack,
	})
}

export default {
	notFound,
	errorHandler,
}
