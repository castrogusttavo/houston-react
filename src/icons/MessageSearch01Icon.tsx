import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MessageSearch01Icon({
  iconName = 'message-search-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
