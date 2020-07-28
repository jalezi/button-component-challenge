// SHADOW TOGGLE

const defaultBtn = document.getElementById('default-btn');
const shadowToggleBtn = document.getElementById('shadow-toggle');
const shadowCode = document.getElementById('shadow-code');
shadowToggleBtn.checked = false;

shadowToggleBtn.addEventListener('click', () => {
  defaultBtn.classList.toggle('shadow');
  setCodeTextShadow();
});

// DISABLED TOGGLE

const defaultBtn2 = document.getElementById('default-btn-2');
const outlineBtn2 = document.getElementById('outline-btn-2');
const textBtn2 = document.getElementById('text-btn-2');
const disableToggleBtn = document.getElementById('disable-toggle');
disableToggleBtn.checked = false;
const disabledCode = document.getElementById('disabled-code');

disableToggleBtn.addEventListener('click', () => {
  defaultBtn2.disabled = !defaultBtn2.disabled;
  outlineBtn2.disabled = !outlineBtn2.disabled;
  textBtn2.disabled = !textBtn2.disabled;
  setCodeTextDisabled();
});

// LEFT - RIGHT TOGGLE

const defaultBtnIcon = document.getElementById('default-btn-icon');
const leftRightIconToggleBtn = document.getElementById('left-right-toggle');
leftRightIconToggleBtn.checked = false;
const leftRightIconCode = document.getElementById('left-right-code');

leftRightIconToggleBtn.addEventListener('click', () => {
  defaultBtnIcon.classList.toggle('btn-icon-l');
  defaultBtnIcon.classList.toggle('btn-icon-r');
  setCodeTextLEftRight();
});

function setCodeTextShadow() {
  const shadow = defaultBtn.classList.contains('shadow');

  if (shadow) {
    shadowCode.innerText = '<button class="btn shadow"/>';
    return;
  }

  if (!shadow) {
    shadowCode.innerText = '<button class="btn"/>';
    return;
  }
}

function setCodeTextDisabled() {
  const disabled = defaultBtn2.disabled;
  const divChildren = document.getElementById('disabled-code').children;
  const code1 = divChildren.item(0).children.code1;
  const code2 = divChildren.item(1).children.code2;
  const code3 = divChildren.item(2).children.code3;
  if (disabled) {
    code1.innerText = '<button disabled class="btn"/>';
    code2.innerText = '<button disabled class="btn btn-outline"/>';
    code3.innerText = '<button disabled class="btn btn-text"/>';
    return;
  }
  if (!disabled) {
    code1.innerText = '<button class="btn"/>';
    code2.innerText = '<button class="btn btn-outline"/>';
    code3.innerText = '<button class="btn btn-text"/>';
    return;
  }
}

function setCodeTextLEftRight() {
  const left = defaultBtnIcon.classList.contains('btn-icon-l');
  const right = defaultBtnIcon.classList.contains('btn-icon-r');

  if (left) {
    leftRightIconCode.innerText = '<button class="btn btn-icon-l"/>';
    return;
  }
  if (right) {
    leftRightIconCode.innerText = '<button class="btn btn-icon-r"/>';
    return;
  }
}
