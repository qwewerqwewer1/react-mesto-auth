// IMPORTS
import React from 'react';
import { Route, Switch, Redirect, } from 'react-router-dom';

// импортируем компоненты приложения
import Login from './Login';
import Register from './Register';
import ProtectedRoute from './ProtectedRoute';
import InfoToolTip from './InfoTooltip';

import '../index.css';
import api from '../utils/api';

import Header from './Header';
import Main from './Main'
import Footer from './Footer'

import PopupWithForm from './PopupWithForm'
import EditAvatarPopup from './EditAvatarPopup'
import AddPlacePopup from './AddPlacePopup'
import ImagePopup from './ImagePopup'
import EditProfilePopup from './EditProfilePopup'

// Сontexts ↑ 
import { CurrentUserContext } from '../contexts/CurrentUserContext';


// FUNCTION APP in ROOT
function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setEditAddPlacePopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  const [isInfoTooltipPopupOpen, setInfoTooltipPopupOpen] = React.useState(false);
  const [success, setSuccess] = React.useState(true);

  // const [loggedIn, setLoggedIn] = useState(false);

  React.useEffect(() => {
    api.getUserInfo()
      .then((userInfo) => {
        setCurrentUser(userInfo);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  React.useEffect(() => {
    api.getCards()
      .then((initialCards) => {
        setCards(initialCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    const likeRequest = !isLiked ? api.setLike(card._id) : api.delLike(card._id);
    likeRequest
      .then((newCard) => {
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        setCards(newCards);
      }).catch((err) => {
        console.log(err);
      });
  }

  function handleCardDelete(card) {
    api.delCard(card._id)
      .then(() => {
        const newCards = cards.filter((c) => !(c._id === card._id));
        setCards(newCards);
      }).catch((err) => {
        console.log(err);
      });
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setEditAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setEditAddPlacePopupOpen(false);
    setSelectedCard(null);
    setInfoTooltipPopupOpen(false);
  }

  function handleUpdateUser(user) {
    api.setProfile(user.name, user.about)
      .then((updateInfoProfile) => {
        setCurrentUser(updateInfoProfile);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateAvatar(link) {
    api.setAvatar(link.avatar)
      .then((newUser) => {
        setCurrentUser(newUser);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleAddPlace(card) {
    api.postCard(card.name, card.link)
      .then((postCard) => {
        setCards([postCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>

        <div className="body">
          <div className="page">
            <Header />
            <Switch>

              <Route path='/sign-up'>
                <Register />
              </Route>

              <Route path='/sign-in'>
                <Login />
              </Route>

              <ProtectedRoute
                path="/cards"
                // loggedIn={loggedIn}
                component={Main}
                cards={cards}
                onEditAvatar={handleEditAvatarClick}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onCardDelete={handleCardDelete}
                onCardClick={handleCardClick}
                onCardLike={handleCardLike}>
              </ ProtectedRoute>

              {/* <Route>
                {loggedIn ? <Redirect to="/cards" /> : <Redirect to="/sign-in" />}
              </Route> */}

            </Switch>

            <Footer />
          </div>

          <EditAvatarPopup
            openPopup={isEditAvatarPopupOpen}
            closePopup={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar} />

          <EditProfilePopup
            openPopup={isEditProfilePopupOpen}
            closePopup={closeAllPopups}
            onUpdateUser={handleUpdateUser} />

          <AddPlacePopup openPopup={isAddPlacePopupOpen}
            closePopup={closeAllPopups}
            onAddPlace={handleAddPlace} />

          <PopupWithForm
            name='confirmDeleteCard'
            title='Вы уверены?'
            buttonTitleSubmit='Удалить' />

          <ImagePopup
            card={selectedCard}
            onClose={closeAllPopups} />
          <InfoToolTip openPopup={isInfoTooltipPopupOpen} closePopup={closeAllPopups} success={success} />
        </div>

      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
