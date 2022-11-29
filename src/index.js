import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する。
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};

// 未完了リストから削除する
const deleteFromIncompleteList = (target) => {
  document.getElementById("inconplete-list").removeChild(target);
};

// 未完了リストを追加する。
const createIncompleteList = (incompleteText) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = incompleteText;

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 親要素を取得
    const completeTarget = completeButton.parentNode;
    // TODOテキスト取得
    const text = completeTarget.firstChild.innerText;

    // 未完了リストから削除する
    deleteFromIncompleteList(completeTarget);

    // div生成
    completeTarget.textContent = null;

    // liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    //button(もどす)タグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "もどす";
    backButton.addEventListener("click", () => {
      // 完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      // テキストを取得
      const text = backButton.parentNode.firstChild.innerText;
      createIncompleteList(text);
    });

    completeTarget.appendChild(li);
    completeTarget.appendChild(backButton);
    // ulタグにdivタグを追加
    document.getElementById("complete-list").appendChild(completeTarget);
  });

  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.parentNode;
    deleteFromIncompleteList(deleteTarget);
  });

  // divタグの子要素に各要素を生成
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // ulタグにdivタグを追加
  document.getElementById("inconplete-list").appendChild(div);
};

const backToIncompleteList = () => {
  createIncompleteList("もどりました");
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
