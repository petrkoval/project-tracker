export async function enableMocking() {
	if (process.env.NODE_ENV === 'production') {
		return
	}

	const {worker} = await import('./browser');

	return worker.start();
}