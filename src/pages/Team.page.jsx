/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect } from "react";
import SectionTitleComponent from "../components/Titles/SectionTitle.component";
import { AllDataContext } from "../context/AllData.context";
import TeamsCardComponent from "../components/Cards/TeamsCard.component";

const TeamPage = () => {
  const { teamDatas } = useContext(AllDataContext);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="team-page">
      <section>
        <div className="our-teams">
          <div className="wrapper">
            <SectionTitleComponent title="Packages">
              Meet our Local Travel Specialists
            </SectionTitleComponent>

            <div className="teams-list">
              {teamDatas !== null
                ? teamDatas.map((teamData, idx) => (
                    <TeamsCardComponent key={idx} cardData={teamData} />
                  ))
                : "Loading..."}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
