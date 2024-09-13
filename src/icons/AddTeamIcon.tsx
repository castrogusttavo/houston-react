import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AddTeamIcon({ iconName = 'add-team', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
