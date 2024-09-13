import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GoogleSheetIcon({
  iconName = 'google-sheet',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
