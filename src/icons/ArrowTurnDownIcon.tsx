import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ArrowTurnDownIcon({
  iconName = 'arrow-turn-down',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
