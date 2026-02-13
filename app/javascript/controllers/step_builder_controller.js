import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["container", "output"]

  connect() {
    this.syncToHidden()
  }

  addStep() {
    const steps = this.containerTarget.querySelectorAll("[data-step]")
    const num = steps.length + 1

    const div = document.createElement("div")
    div.setAttribute("data-step", "")
    div.className = "flex items-start space-x-2 bg-gray-50 p-3 rounded-md"
    div.innerHTML = `
      <span class="text-sm text-gray-400 pt-2 w-6">${num}.</span>
      <select data-action="change->step-builder#changeAction" data-field="action" class="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
        <option value="visit">Visit URL</option>
        <option value="click">Click</option>
        <option value="fill_in">Fill In</option>
        <option value="expect_text">Expect Text</option>
      </select>
      <input type="text" data-field="url" placeholder="https://..." class="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
      <input type="text" data-field="selector" placeholder="CSS selector (e.g. #email)" class="hidden flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
      <input type="text" data-field="value" placeholder="Value to enter" class="hidden flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
      <input type="text" data-field="text" placeholder="Expected text" class="hidden flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
      <button type="button" data-action="click->step-builder#removeStep" class="text-red-400 hover:text-red-600 pt-2">
        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
    `
    this.containerTarget.appendChild(div)
    this.syncToHidden()
  }

  removeStep(event) {
    event.target.closest("[data-step]").remove()
    this.renumber()
    this.syncToHidden()
  }

  changeAction(event) {
    const row = event.target.closest("[data-step]")
    const action = event.target.value

    const urlField = row.querySelector("[data-field='url']")
    const selectorField = row.querySelector("[data-field='selector']")
    const valueField = row.querySelector("[data-field='value']")
    const textField = row.querySelector("[data-field='text']")

    urlField.classList.toggle("hidden", action !== "visit")
    selectorField.classList.toggle("hidden", !["click", "fill_in"].includes(action))
    valueField.classList.toggle("hidden", action !== "fill_in")
    textField.classList.toggle("hidden", action !== "expect_text")

    this.syncToHidden()
  }

  syncToHidden() {
    const steps = []
    this.containerTarget.querySelectorAll("[data-step]").forEach(row => {
      const action = row.querySelector("[data-field='action']").value
      const step = { action }

      if (action === "visit") {
        step.url = row.querySelector("[data-field='url']").value
      } else if (action === "click") {
        step.selector = row.querySelector("[data-field='selector']").value
      } else if (action === "fill_in") {
        step.selector = row.querySelector("[data-field='selector']").value
        step.value = row.querySelector("[data-field='value']").value
      } else if (action === "expect_text") {
        step.text = row.querySelector("[data-field='text']").value
      }

      steps.push(step)
    })
    this.outputTarget.value = JSON.stringify(steps)
  }

  renumber() {
    this.containerTarget.querySelectorAll("[data-step]").forEach((row, i) => {
      const span = row.querySelector("span")
      if (span) span.textContent = `${i + 1}.`
    })
  }
}
