import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ArrowMoveUpLeftIcon({
  iconName = 'arrow-move-up-left',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
