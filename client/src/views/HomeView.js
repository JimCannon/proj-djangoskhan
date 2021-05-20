import { NewsCards } from "../components/newscards/NewsCards"
import "./HomeView.scss"
// import waves from "../shared/images/2waves.png"
import waves from "../shared/images/1bigwave.png"

export const HomeView = () => {
	return (
		<div className="home-container">
			<div className="hero-container">
				<img src={waves}></img>
			</div>
			<div className="news-content">
				<div className="news-container-center">
					<h1 className="news-title">SENASTE NYTT</h1>
					<div className="news-cards-wrapper">
						<div className="big-news-cards"></div>
						<div className="small-news-cards">
							<NewsCards />
							<NewsCards />
							<NewsCards />
							<NewsCards />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
