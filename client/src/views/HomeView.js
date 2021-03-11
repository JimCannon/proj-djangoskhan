import { NewsCards } from "../components/newscards/NewsCards"
import "./HomeView.css"

export const HomeView = () => {
	return (
		<div className="home-container">
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
