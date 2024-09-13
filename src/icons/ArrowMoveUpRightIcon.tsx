import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ArrowMoveUpRightIcon({
  iconName = 'arrow-move-up-right',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
