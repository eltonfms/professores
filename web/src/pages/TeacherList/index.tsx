import React from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import './styles.scss';

function TeacherList() {
  return (
    <div className="teacher-list">
      <PageHeader title="Estes são os professores disponíveis.">
        <div className="search">
          <form id="search-teachers" className="search-teacher">
            <div className="search-field">
              <label htmlFor="subject" className="search-label">Matéria</label>
              <input type="text" id="subject" name="subject" className="search-entry" />
            </div>
            <div className="search-field">
              <label htmlFor="week_day" className="search-label">Dia da semana</label>
              <input type="text" id="week_day" name="week_day" className="search-entry" />
            </div>
            <div className="search-field">
              <label htmlFor="time" className="search-label">Hora</label>
              <input type="text" id="time" name="time" className="search-entry" />
            </div>
          </form>
        </div>
      </PageHeader>
      <main className="teacher-list__main">
        <div className="wrapper">
          <TeacherItem info="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus totam cupiditate aliquam earum." />
          <TeacherItem info="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus totam cupiditate aliquam earum." />
          <TeacherItem info="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus totam cupiditate aliquam earum." />
          <TeacherItem info="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus totam cupiditate aliquam earum." />
          <TeacherItem info="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus totam cupiditate aliquam earum." />
        </div>
      </main>
    </div>
  )
}

export default TeacherList;
