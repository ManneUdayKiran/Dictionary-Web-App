
# 📖 Word Wizard – Dictionary Web App

**Word Wizard** is a sleek and interactive dictionary web app that lets users search for the definitions of English words using the [Free Dictionary API](https://dictionaryapi.dev/). Built with **React + Vite** and styled with **Material UI (MUI)**, this app offers real-time word lookup, search history, and smooth animations for a polished user experience.

---

## 🚀 Features

- 🔍 Search any English word and get real definitions
- 💬 Shows part of speech, definitions, and example usage
- 🧠 Tracks and displays recent word searches
- 🎯 Clickable and keyboard-navigable history chips
- 🌀 Fade-in and tap animations using Framer Motion
- ❌ Clear search history with one click
- 📱 Responsive and accessible UI

---

## 🛠️ Tech Stack

- [React + Vite](https://vitejs.dev/)
- [Material UI](https://mui.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Axios](https://axios-http.com/)
- [Free Dictionary API](https://dictionaryapi.dev/)

---

## 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/word-wizard.git
cd word-wizard
````

2. **Install dependencies**

```bash
npm install
```

3. **Run the app**

```bash
npm run dev
```

The app will run on [http://localhost:5173](http://localhost:5173)

---

## ✨ Folder Structure

```
src/
├── components/
│   ├── SearchBar.jsx         # Search input and button
│   ├── DefinitionCard.jsx    # Displays definitions
│   └── HistoryList.jsx       # Recent search history with animations
├── App.jsx                   # Main app logic
├── main.jsx                  # React entry point
└── index.css                 # Global styles
```

---

## 📌 API Reference

Using: **[https://api.dictionaryapi.dev/api/v2/entries/en/](https://api.dictionaryapi.dev/api/v2/entries/en/)<word>**

Example:

```
GET https://api.dictionaryapi.dev/api/v2/entries/en/example
```

Returns a JSON array with phonetics, meanings, definitions, and usage examples.

---

## 🧠 Describe Your Approach

I built **Word Wizard** using React + Vite for a fast development experience. MUI provided a consistent and responsive UI, while Framer Motion added interactive animations. I structured the app with reusable components (`SearchBar`, `DefinitionCard`, and `HistoryList`) and used localStorage to persist recent search history with smooth UX enhancements like fade-in and click scale animations. Keyboard navigation support ensures accessibility.

---

## 📃 License

This project is open-source and free to use under the [MIT License](LICENSE).

---

## 🙌 Acknowledgments

* [Free Dictionary API](https://dictionaryapi.dev/)
* [Material UI](https://mui.com/)
* [Framer Motion](https://www.framer.com/motion/)


