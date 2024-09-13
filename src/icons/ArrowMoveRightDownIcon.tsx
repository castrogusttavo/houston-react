import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ArrowMoveRightDownIcon({
  iconName = 'arrow-move-right-down',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
