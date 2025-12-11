
export type NodeType = 'input' | 'detection' | 'tracking' | 'pose' | 'classifier' | 'logic' | 'output';
export type Category = 'Source' | 'AI Model' | 'Logic' | 'Output';

export interface Position {
  x: number;
  y: number;
}

export interface NodeData {
  label: string;
  description?: string;
  status?: 'idle' | 'running' | 'completed' | 'error';
  properties?: Record<string, any>;
  previewImage?: string;
}

export interface Node {
  id: string;
  type: NodeType;
  position: Position;
  data: NodeData;
  inputs: string[]; // port IDs
  outputs: string[]; // port IDs
  selected?: boolean;
}

export interface Connection {
  id: string;
  sourceNodeId: string;
  sourceHandle: string;
  targetNodeId: string;
  targetHandle: string;
}

export interface DraggableNode {
  type: NodeType;
  label: string;
  desc: string;
  category: Category;
}

export interface Workflow {
  id: string;
  name: string;
  description: string;
  updatedAt: string;
  status: 'active' | 'draft' | 'archived';
  nodesCount: number;
  thumbnail?: string;
}
