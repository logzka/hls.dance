import React from "react";
import ArticleTitle from "./ArticleTitle"
import Article from "./Article"
import Container from "./Container";
import FlipCard from "./common/FlipCard";
import { FlipContextProvider } from "../context/flip.context";
import SectionTitle from "./SectionTitle";
import ArticleList from "./ArticleList";

const Offline = () => <section id="offline" className="bg-dark">
  <Container>
    <SectionTitle>offline занятия</SectionTitle>
    <div className="mb-8 sm:mb-16">Анапа</div>
    <ArticleTitle className='text-dark bg-green-300 rounded-sm w-fit'>Открытые группы <span className="text-accent text-nowrap">High Heels 16+</span></ArticleTitle>
    <p className="font-light sm:text-xl mb-8 max-w-9/12">Каждый класс сопровождается разминкой всего тела, рутиной/хорео,<br />а также небольшой подкачкой и растяжкой в конце</p>
    <FlipContextProvider>
      <div className="flip-wrapper grid lg:grid-cols-2 gap-4 2xl:gap-8 mb-16">
        <FlipCard
          index={1}
          frontChild={<div className="h-full bg-accent rounded-sm p-4 sm:p-8 shadow-accent/40 shadow-2xl">
            <ArticleTitle className='text-dark bg-green-300 rounded-sm w-fit'>Начинающие</ArticleTitle>
            <Article className="sm:text-xl">
              Правильно и технично начать танцевать High Heels<br /><br />
              {/* Группа High Heels для начинающих живет <span className="font-bold">в режиме non-stop</span><br /><br /> */}
              <ArticleList list={[
                'Можно присоединиться в любой момент, ты все равно освоишь всю базу и технику направления High Heels',
                <span>Как только почувствуешь, что достаточно освоил(а) базу и технику High Heels, сможешь перейти в группу <span className="font-bold">"High Heels - Продолжающие"</span></span>,
              ]} />
            </Article>
          </div>}
          backChild={<div className="h-full border-8 border-accent bg-dark rounded-sm p-4 sm:p-8">
            <ArticleTitle className='text-dark bg-green-300 rounded-sm w-fit'>Начинающие</ArticleTitle>
            <ArticleList className='pl-4' list={[
                'Баланс, перенос веса, постановка бевел, релеве, пассе',
                'High Heels шаг, дефиле',
                'Волны, "Flat Back"',
                'Вращения (пируэт, пике тур), проработка центра',
                'Вращения головой Head Roll',
                'Работа рук: волны, скольжения, точки'
              ]} />
          </div>} />
        <FlipCard
          index={2}
          frontChild={<div className="h-full bg-accent rounded-sm p-4 sm:p-8 shadow-accent/40 shadow-2xl">
            <ArticleTitle className='text-dark bg-green-300 rounded-sm w-fit'>Продолжающие</ArticleTitle>
            <Article>
              <p className="sm:text-xl">Если ты <span className="font-bold">уже знаком(а) с базой и техикой High Heels</span>, умеешь держать баланс и просто двигаться на каблуках, то тебе обязательно сюда</p>
            </Article>
          </div>}
          backChild={<div className="h-full border-8 border-accent bg-dark rounded-sm p-4 sm:p-8">
            <ArticleTitle className='text-dark bg-green-300 rounded-sm w-fit'>Продолжающие</ArticleTitle>
            <ArticleList className='pl-4' list={[
                'Вариации базовых движений High Heels',
                'Нестандартные хорео',
                'High Heels Experimental',
                'Импровизация',
                'Музыкальность, эмоциональность',
                'Самоощущение себя в танце',
                'Смежные стили танцев (Twerk | Wacking | Hip Hop)',
                'Видео-съемки'
              ]} />
          </div>} />
      </div>
    </FlipContextProvider>
    {/* <ArticleTitle className='text-dark bg-green-300 rounded-sm w-fit'>Открытая группа Hip Hop - Любой уровень 12+</ArticleTitle>
    <ArticleTitle className='text-dark bg-green-300 rounded-sm w-fit'>Открытая группа House Dance - Любой уровень 12+</ArticleTitle> */}
    <ArticleTitle className='text-dark bg-green-300 rounded-sm w-fit'>High Heels Хорео классы</ArticleTitle>
    <Article>
      <p>В ближайшее время хорео-классов не предстоит. Уточняйте у админа</p>
    </Article>
  </Container>
</section>

export default Offline;