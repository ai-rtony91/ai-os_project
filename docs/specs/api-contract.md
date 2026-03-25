# AI-OS API Contract (V1 - Draft)

## Entities
- Agent
- Workflow
- Step
- Approval
- LogEntry

## Endpoints (concept)
GET  /status
GET  /agents
GET  /workflows
GET  /workflows/{id}
GET  /approvals
POST /approvals/{id}/approve
POST /approvals/{id}/deny
GET  /logs?workflowId=&agentId=&limit=

## Notes
- UI reads from these.
- Orchestrator owns workflow state.
