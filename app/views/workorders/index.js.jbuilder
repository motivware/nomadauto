json.array!(@workorders) do |workorder|
  json.extract! workorder, :id, :status, :timestamp
  json.url project_workorders_path(workorder, format: :json)
end
