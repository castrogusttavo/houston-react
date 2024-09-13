import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ArrowMoveDownLeftIcon({
  iconName = 'arrow-move-down-left',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
