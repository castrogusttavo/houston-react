import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ArrowMoveDownRightIcon({
  iconName = 'arrow-move-down-right',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
