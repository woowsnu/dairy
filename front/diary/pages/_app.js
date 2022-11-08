import { RecoilRoot } from 'recoil';
import { Reset } from 'styled-reset';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Reset />
			<RecoilRoot>
				<Component {...pageProps} />
			</RecoilRoot>
		</>
	);
}

export default MyApp;
