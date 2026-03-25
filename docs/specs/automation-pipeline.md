# AI-OS Automation Pipeline (Internal)

## Goal
Turn two user uploads into a generated project:
- White Paper (architecture intent)
- README.md (practical requirements)

## Pipeline Stages (authoritative)
1) Intake
- Accept: whitepaper + README
- Store originals
- Create job id

2) Validate
- File types present
- Size limits
- Basic schema checks (non-empty)

3) Parse
- Extract: goal, constraints, must-haves, non-goals
- Extract: architecture hints, security requirements

4) Classify
- Determine project type: web app / api / agent system / hybrid
- Select templates and generators

5) Generate Scaffold
- Create folders/files
- Seed config files
- Produce TODO list

6) Environment Setup (later)
- Local dependencies checklist
- Optional cloud resources plan

7) Output
- Produce generated project folder/repo output
- Produce summary + next actions + audit log

## Human-in-the-loop
Approvals required before:
- running commands
- provisioning cloud resources
- writing secrets
