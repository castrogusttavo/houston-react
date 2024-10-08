import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MachineRobotIcon({
  iconName = 'machine-robot',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
