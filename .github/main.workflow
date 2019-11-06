workflow "auto-label" {
  on = "pull_request"
  resolves = ["Auto label"]
}

action "Auto label" {
  uses = "banyan/auto-label@master"
  secrets = ["672545bc38807b714f7f404ab33526024600244a"]
}
