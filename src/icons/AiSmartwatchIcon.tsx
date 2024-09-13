import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AiSmartwatchIcon({
  iconName = 'ai-smartwatch',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
