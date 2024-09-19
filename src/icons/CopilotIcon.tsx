import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CopilotIcon({ iconName = 'copilot-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
