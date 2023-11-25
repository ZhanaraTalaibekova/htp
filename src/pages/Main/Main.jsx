import React from "react";
import { Link } from "react-router-dom";

export const Main = () => {

  return (
    <>
      <Link to="/users">
        <div>Почему КГ</div>
      </Link>
      <Link to="/users">
        <div>Пользователи</div>
      </Link>
      <Link to="/users">
        <div>Заседание</div>
      </Link>
      <Link to="/users">
        <div>Резиденты</div>
      </Link>
      <Link to="/news">
        <div>Новости</div>
      </Link>
      <Link to="/users">
        <div>Медиа Новости</div>
      </Link>
      <Link to="/users">
        <div>Комментарии</div>
      </Link>
      <Link to="/users">
        <div>Диаграммы</div>
      </Link>
      <Link to="/users">
        <div>Заявки</div>
      </Link>
      <Link to="/users">
        <div>Файлы</div>
      </Link>

    </>
  );
};
