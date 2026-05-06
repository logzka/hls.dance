import React from "react";
import ArticleTitle from "./ArticleTitle"
import Article from "./Article"
import Container from "./Container";
import FlipCard from "./common/FlipCard";
import { FlipContextProvider } from "../context/flip.context";

const Offline = () => {
    return <section id="offline" className="bg-dark">
    <Container>
      <h2 className="text-accent text-6xl">offline занятия</h2>
      <div className="mb-16">| Анапа</div>
      <ArticleTitle className='text-dark bg-green-300 rounded-sm w-fit'>Открытые группы <span className="text-accent">High Heels 16+</span></ArticleTitle>
      <p className="font-light text-yellow-100 text-lg mb-8">Каждый класс сопровождается разминкой всего тела, рутиной/хорео, а также небольшой подкачкой и растяжкой в конце</p>
      <FlipContextProvider>
        <div className="flip-wrapper grid grid-cols-2 gap-4 mb-16">
          <FlipCard
            index={1}
            frontChild={
              <div className="h-full bg-accent rounded-sm p-8 shadow-accent/40 shadow-2xl">
                <ArticleTitle className='text-dark bg-green-300 rounded-sm w-fit'>Начинающие</ArticleTitle>
                <Article className="pl-16 mb-8">
                  {/* Если ты хочешь правильно и технично начать танцевать High Heels<br /><br /> */}
                  Группа High Heels для начинающих живет <span className="font-bold">в режиме non-stop</span><br />
                  Это значит, что <span className="font-bold">база и техника</span> танцевального направления High Heels преподается <span className="font-bold">циклично</span><br/><br />
                  {/* <span className="font-bold">Какие сладенькие плюшки тебя ждут?</span>
                  <ul className="pl-4 mb-8">
                    <li>-  Можно присоединиться в любой момент, ты все равно освоишь всю базу и технику направления High Heels</li>
                    <li>-  Как только почувствуешь, что достаточно освоил(а) базу и технику High Heels, сможешь перейти в группу <span className="font-bold">"High Heels - Продолжающие"</span></li>
                  </ul> */}
                </Article>
              </div>
            }
            backChild={
              <div className="h-full border-8 border-accent bg-dark rounded-sm p-8">
                <span className="font-bold">Чему ты научишься:</span>
                <ul className="pl-4 mb-8">
                  <li>-  Баланс, перенос веса, постановка бевел, релеве, пассе</li>
                  <li>-  High Heels шаг, дефиле</li>
                  <li>-  Волны, "Flat Back"</li>
                  <li>-  Вращения (пируэт, пике тур), проработка центра</li>
                  <li>-  Вращения головой Head Roll</li>
                  <li>-  Работа рук: волны, скольжения, точки</li>
                </ul>
              </div>
            }
          />
          <FlipCard
            index={2}
            frontChild={
              <div className="h-full bg-accent rounded-sm p-8 shadow-accent/40 shadow-2xl">
                <ArticleTitle className='text-dark bg-green-300 rounded-sm w-fit'>Продолжающие</ArticleTitle>
                <Article className="pl-16 mb-8">
                  <p className="mb-8">Если ты <span className="font-bold">уже знаком(а) с базой и техикой High Heels</span>, умеешь держать баланс и просто двигаться на каблуках, то тебе обязательно сюда</p>
                </Article>
              </div>
            }
            backChild={
              <div className="h-full border-8 border-accent bg-dark rounded-sm p-8">
                <span className="font-bold">Что мы делаем в группе High Heels - Продолжающие:</span>
                <ul className="pl-4 mb-8">
                  <li>-  Изучаем вариации базовых движений High Heels</li>
                  <li>-  Изучаем интересные хорео под современную музыку и хиты</li>
                  <li>-  Знакомимся с High Heels Experimental</li>
                  <li>-  Импровизируем</li>
                  <li>-  Работаем над музыкальностью, эмоциональностью и самоощущением в танце</li>
                  <li>-  Погружаемся в смежные стили танцев</li>
                  <li>-  Участвуем в видео-съемках</li>
                </ul>
              </div>
            }
          />
        </div>
      </FlipContextProvider>
      {/* <ArticleTitle className='text-dark bg-green-300 rounded-sm w-fit'>Открытая группа Hip Hop - Любой уровень 12+</ArticleTitle>
      <ArticleTitle className='text-dark bg-green-300 rounded-sm w-fit'>Открытая группа House Dance - Любой уровень 12+</ArticleTitle> */}
      <ArticleTitle className='text-dark bg-green-300 rounded-sm w-fit'>High Heels Хорео классы</ArticleTitle>
      <Article className="pl-16 mb-8">
        <p>В ближайшее время хорео-классов не предстоит. Уточняйте у админа</p>
      </Article>
    </Container>
  </section>
}

export default Offline;