import Axios from 'axios'
export const getTaskList = async () => {
	return await Axios.get(`${process.env.MIX_APP_URL}/api/tasks`)
	.then((res) => {
		return res.data
	})
}
export const storeNewTask = async (data, callback) => {
	return await Axios.post(`${process.env.MIX_APP_URL}/api/tasks`, data)
	.then((res) => {
		callback(res.data.data)
	})
}
export const deleteTask = async (id, callback) => {
	return await Axios.delete(`${process.env.MIX_APP_URL}/api/tasks/${id}`)
	.then((res) => {
		callback()
	});
};